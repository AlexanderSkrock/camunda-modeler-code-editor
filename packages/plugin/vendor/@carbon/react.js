/**
 * As soon as <a href=https://github.com/camunda/camunda-modeler/issues/4511>Camunda Modeler Issue 4511</a> is resolved,
 * we can access the carbon components directly via the `camunda-modeler-plugin-helpers` dependency.
 */
/* eslint-disable */
import '@carbon/react/scss/components/button/_index.scss';
import '@carbon/react/scss/components/modal/_index.scss';
import '@carbon/react/scss/components/pagination-nav/_index.scss';
import '@carbon/react/scss/components/search/_index.scss';
import '@carbon/react/scss/components/structured-list/_index.scss';
import '@carbon/react/scss/components/tabs/_index.scss';

export {
    Button,
    ComposedModal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    PaginationNav,
    Search,
    StructuredListWrapper,
    StructuredListBody,
    StructuredListCell,
    StructuredListHead,
    StructuredListRow,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Theme,
} from '@carbon/react';
/* eslint-enable */
