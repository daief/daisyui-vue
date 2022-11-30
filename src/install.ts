import { App, Plugin } from 'vue';
import { CONTEXT_SYMBOL, createTheme } from './shared/ctx';

import {
  Alert,
  Artboard,
  Avatar,
  AvatrGroup,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  CardTitle,
  CardBody,
  CardActions,
  CardImage,
  Checkbox,
  CheckboxGroup,
  Conter,
  Divider,
  Drawer,
  Dropdown,
  Element,
  Icon,
  Indicator,
  IndicatorItem,
  Input,
  Kbd,
  Link,
  Mask,
  Menu,
  MenuItem,
  ModalBase,
  ModalTitle,
  ModalBody,
  ModalAction,
  Navbar,
  NavbarStart,
  NavbarCenter,
  NavbarEnd,
  Popper,
  Progress,
  RadialProgress,
  Radio,
  RadioGroup,
  Swap,
  Tabs,
  TabPanel,
  Table,
  Toggle,
  Tooltip,
} from './components';

const all = /* @__PURE__ */ [
  Alert,
  Artboard,
  Avatar,
  AvatrGroup,
  Element,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  CardTitle,
  CardBody,
  CardActions,
  CardImage,
  Checkbox,
  CheckboxGroup,
  Conter,
  Divider,
  Drawer,
  Dropdown,
  Icon,
  Indicator,
  IndicatorItem,
  Input,
  Kbd,
  Link,
  Mask,
  Menu,
  MenuItem,
  ModalBase,
  ModalTitle,
  ModalBody,
  ModalAction,
  Navbar,
  NavbarStart,
  NavbarCenter,
  NavbarEnd,
  Popper,
  Progress,
  RadialProgress,
  Radio,
  RadioGroup,
  Swap,
  Tabs,
  TabPanel,
  Table,
  Toggle,
  Tooltip,
];

export const install: Plugin = /* @__PURE__ */ function (
  app: App,
  options?: {
    prefix?: string;
  },
) {
  const { prefix } = {
    prefix: 'Dv',
    ...options,
  };

  // @ts-ignore
  installTheme(app);

  all.forEach((el) => {
    app.component(prefix + el.name, el);
  });
};

export const installTheme: Plugin = /* @__PURE__ */ function (app: App) {
  const ctx = createTheme();
  app.provide(CONTEXT_SYMBOL, ctx);
  app.config.globalProperties.$daisyui = ctx;
};
