import React, { Component, ReactElement } from 'react';
import '../css/bootstrap.min.css';
import 'source-sans-pro/source-sans-pro.css';
import '../adminlte/css/AdminLTE.css';
import 'bootstrap';
import '../adminlte/js/adminlte';
import 'jquery-sparkline';
import * as Sidebar from './Sidebar/Sidebar';
import Content from './Content';
import Footer from './Footer';
import ControlSidebar from './ControlSidebar';
import * as Navbar from './NavbarMenu/Navbar';
import Row from './content/Row';
import Col from './content/Col';
import Infobox from './content/Infobox';
import Box from './content/Box';
import DescriptionBlock from './content/DescriptionBlock';
import ProgressGroup from './content/ProgressGroup';
import Button from './content/Button';
import ButtonGroup from './content/ButtonGroup';
import DataTable from './content/DataTable';
import Tabs from './content/Tabs';
import TabContent from './content/TabContent';
import Description from './content/Description';
import DescriptionItem from './content/DescriptionItem';
import Margin from './content/Margin';
import SparklineBox from './content/SparklineBox';
import Chatbox from './content/Chatbox';
import Memberbox from './content/Memberbox';
import SimpleTable from './content/SimpleTable';
import Sparkbar from './content/Sparkbar';
import NavList from './content/NavList';
import NavListItem from './content/NavListItem';
import ProductList from './content/ProductList';
import ProductListItem from './content/ProductListItem';
import Infobox2 from './content/Infobox2';
import Alert from './content/Alert';
import Callout from './content/Callout';
import ProgressBar from './content/ProgressBar';
import Divider from './content/Divider';
import * as Inputs from './content/Inputs';
import LoginCore from './content/LoginCore';
import AsyncComponent from './AsyncComponent';
import { Colors as Colors_, Types as Types_, Sizes as Sizes_, FormTypes as FormTypes_, Themes as Themes_ } from './PropTypes';
import Badge from './content/Badge';
import Calendar from './content/Calendar';
import LoadingSpinner from './content/LoadingSpinner';
import BoxPane from './content/BoxPane';
import ButtonToolbar from './content/ButtonToolbar';
import Label from './content/Label';
import Pagination from './content/Pagination';
import SmartTable from './content/SmartTable';
type Node = React.ReactNode;
type Props = {
    children: ReactElement | ReactElement[];
    title: string | string[];
    titleShort: string | string[];
    theme: Themes;
    browserTitle: string;
    sidebar: Node;
    footer: Node;
    homeTo: string;
    fixed: boolean;
    searchbarFilter: boolean;
};
declare class AdminLTE extends Component<Props, {}> {
    static defaultProps: {
        children: null;
        title: string[];
        titleShort: string[];
        browserTitle: null;
        theme: string;
        footer: null;
        sidebar: undefined;
        homeTo: string;
        fixed: boolean;
        searchbarFilter: boolean;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
export default AdminLTE;
export type Colors = Colors_;
export type Types = Types_;
export type Sizes = Sizes_;
export type FormTypes = FormTypes_;
export type Themes = Themes_;
export { Content, Sidebar, Footer, ControlSidebar, Navbar, Row, Col, Infobox, Box, DescriptionBlock, ProgressGroup, Button, DataTable, Tabs, TabContent, Description, DescriptionItem, ButtonGroup, Margin, SparklineBox, Chatbox, Memberbox, SimpleTable, Sparkbar, NavListItem, NavList, ProductList, ProductListItem, Infobox2, LoginCore, AsyncComponent, Alert, Callout, ProgressBar, Divider, Inputs, Label, Badge, Calendar, LoadingSpinner, BoxPane, ButtonToolbar, Pagination, SmartTable, };
//# sourceMappingURL=AdminLTE.d.ts.map