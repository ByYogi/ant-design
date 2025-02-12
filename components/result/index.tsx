import * as React from 'react';
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import WarningFilled from '@ant-design/icons/WarningFilled';
import classNames from 'classnames';

import { devUseWarning } from '../_util/warning';
import noFound from './noFound';
import serverError from './serverError';
import useStyle from './style';
import unauthorized from './unauthorized';
import { useComponentConfig } from '../config-provider/context';

export const IconMap = {
  success: CheckCircleFilled,
  error: CloseCircleFilled,
  info: ExclamationCircleFilled,
  warning: WarningFilled,
};

export const ExceptionMap = {
  '404': noFound,
  '500': serverError,
  '403': unauthorized,
};

export type ExceptionStatusType = 403 | 404 | 500 | '403' | '404' | '500';
export type ResultStatusType = ExceptionStatusType | keyof typeof IconMap;
type SemanticName = 'root' | 'title' | 'subTitle' | 'body' | 'extra' | 'icon';

export interface ResultProps {
  icon?: React.ReactNode;
  status?: ResultStatusType;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  extra?: React.ReactNode;
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  classNames?: Partial<Record<SemanticName, string>>;
  styles?: Partial<Record<SemanticName, React.CSSProperties>>;
}

// ExceptionImageMap keys
const ExceptionStatus = Object.keys(ExceptionMap);

/**
 * Render icon if ExceptionStatus includes ,render svg image else render iconNode
 *
 * @param prefixCls
 * @param {status, icon}
 */

interface IconProps {
  className: string;
  icon: React.ReactNode;
  status: ResultStatusType;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ icon, status, className, style }) => {
  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning('Result');

    warning(
      !(typeof icon === 'string' && icon.length > 2),
      'breaking',
      `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${icon}\` at https://ant.design/components/icon`,
    );
  }

  if (ExceptionStatus.includes(`${status}`)) {
    const SVGComponent = ExceptionMap[status as ExceptionStatusType];
    return (
      <div className={className} style={style}>
        <SVGComponent />
      </div>
    );
  }

  const iconNode = React.createElement(
    IconMap[status as Exclude<ResultStatusType, ExceptionStatusType>],
  );

  if (icon === null || icon === false) {
    return null;
  }

  return (
    <div className={className} style={style}>
      {icon || iconNode}
    </div>
  );
};

interface ExtraProps {
  extra: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Extra: React.FC<ExtraProps> = ({ className, extra, style }) => {
  if (!extra) {
    return null;
  }
  return (
    <div className={className} style={style}>
      {extra}
    </div>
  );
};

export interface ResultType extends React.FC<ResultProps> {
  PRESENTED_IMAGE_404: React.FC;
  PRESENTED_IMAGE_403: React.FC;
  PRESENTED_IMAGE_500: React.FC;
}

const Result: ResultType = ({
  prefixCls: customizePrefixCls,
  className: customizeClassName,
  rootClassName,
  subTitle,
  title,
  style,
  children,
  status = 'info',
  icon,
  extra,
  styles,
  classNames: resultClassNames,
}) => {
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles,
  } = useComponentConfig('result');

  const prefixCls = getPrefixCls('result', customizePrefixCls);

  // Style
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);

  const rootClassNames = classNames(
    prefixCls,
    `${prefixCls}-${status}`,
    customizeClassName,
    contextClassName,
    rootClassName,
    { [`${prefixCls}-rtl`]: direction === 'rtl' },
    hashId,
    cssVarCls,
    contextClassNames.root,
    resultClassNames?.root,
  );

  const titleClassNames = classNames(
    `${prefixCls}-title`,
    contextClassNames.title,
    resultClassNames?.title,
  );

  const subTitleClassNames = classNames(
    `${prefixCls}-subtitle`,
    contextClassNames.subTitle,
    resultClassNames?.subTitle,
  );

  const extraClassNames = classNames(
    `${prefixCls}-extra`,
    contextClassNames.extra,
    resultClassNames?.extra,
  );

  const bodyClassNames = classNames(
    `${prefixCls}-body`,
    contextClassNames.body,
    resultClassNames?.body,
  );

  const iconClassNames = classNames(
    `${prefixCls}-icon`,
    { [`${prefixCls}-image`]: ExceptionStatus.includes(`${status}`) },
    contextClassNames.icon,
    resultClassNames?.icon,
  );

  const rootStyles: React.CSSProperties = {
    ...contextStyles.root,
    ...styles?.root,
    ...contextStyle,
    ...style,
  };

  return wrapCSSVar(
    <div className={rootClassNames} style={rootStyles}>
      <Icon
        className={iconClassNames}
        style={{ ...contextStyles.icon, ...styles?.icon }}
        status={status}
        icon={icon}
      />
      <div className={titleClassNames} style={{ ...contextStyles.title, ...styles?.title }}>
        {title}
      </div>
      {subTitle && (
        <div
          className={subTitleClassNames}
          style={{ ...contextStyles.subTitle, ...styles?.subTitle }}
        >
          {subTitle}
        </div>
      )}
      <Extra
        className={extraClassNames}
        extra={extra}
        style={{ ...contextStyles.extra, ...styles?.extra }}
      />
      {children && (
        <div className={bodyClassNames} style={{ ...contextStyles.body, ...styles?.body }}>
          {children}
        </div>
      )}
    </div>,
  );
};

Result.PRESENTED_IMAGE_403 = ExceptionMap['403'];
Result.PRESENTED_IMAGE_404 = ExceptionMap['404'];
Result.PRESENTED_IMAGE_500 = ExceptionMap['500'];

if (process.env.NODE_ENV !== 'production') {
  Result.displayName = 'Result';
}

export default Result;
