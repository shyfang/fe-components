import canUseDom from 'rc-util/lib/Dom/canUseDom';
import { updateCSS } from 'rc-util/lib/Dom/dynamicCSS';
import daxDarkVariables from '../theme/dax-dark';
import daxLightVariables from '../theme/dax-light';
import defaultThemeVariables from '../theme/default';
import type { Theme } from './interface';

const dynamicStyleMark = `-nova-${Date.now()}-${Math.random()}`;

export function getStyle(globalPrefixCls: string, theme: Theme) {
  let variables: Record<string, string> = {};

  if (theme === 'default') {
    // variables = defaultThemeVariables;
  } else if (theme === 'dark') {
    variables = daxDarkVariables;
  } else if (theme === 'light') {
    variables = daxLightVariables;
  } else {
    variables = defaultThemeVariables;
  }

  // Convert to css variables
  const cssList = Object.keys(variables).map(
    (key) => `--${globalPrefixCls}-${key}: ${variables[key]};`,
  );

  return `
  :root {
    ${cssList.join('\n')}
  }
  `.trim();
}

export function registerTheme(globalPrefixCls: string, theme: Theme) {
  const style = getStyle(globalPrefixCls, theme);

  if (canUseDom()) {
    updateCSS(style, `${dynamicStyleMark}-dynamic-theme`);
  } else {
    console.warn(
      'ConfigProvider SSR do not support dynamic theme with css variables.',
    );
  }
}
