import * as React from 'react';
import styles from './ChangeControlManagement.module.scss';
import { IChangeControlManagementProps } from './IChangeControlManagementProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import {
  TextField, Stack, IStackProps, Calendar, FocusTrapZone, Callout, DirectionalHint, DefaultButton,
  ThemeProvider, initializeIcons, IStackStyles, Fabric
} from 'office-ui-fabric-react';
import { useBoolean } from '@uifabric/react-hooks';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "@pnp/spfx-controls-react/lib/AccessibleAccordion";
import * as ReactDOM from 'react-dom';

initializeIcons();

const stackTokens = { childrenGap: 50 };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };

// interface ICalendarButtonExampleProps {
//   isDayPickerVisible?: boolean;
//   isMonthPickerVisible?: boolean;
//   highlightCurrentMonth?: boolean;
//   highlightSelectedMonth?: boolean;
//   buttonString?: string;
//   showMonthPickerAsOverlay?: boolean;
//   showGoToToday?: boolean;
// }
// let calendarButtonElement: HTMLElement;
// const [showCalendar, { toggle: toggleShowCalendar }] = useBoolean(false);
// const [selectedDate, setSelectedDate] = React.useState<Date>();

// const {
//   showMonthPickerAsOverlay = false,
//   isDayPickerVisible = true,
//   isMonthPickerVisible = true,
//   showGoToToday = true,
//   buttonString = 'Click for Calendar',
//   highlightCurrentMonth,
//   highlightSelectedMonth,
// } = props;

// const onSelectDate = (date: Date): void => {
//   toggleShowCalendar();
//   setSelectedDate(date);
// };
// 



export const ChangeControlManagement: React.FunctionComponent<IChangeControlManagementProps> = (props) => {
  return (
    <>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton >
              Change Requester Details
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>

            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Is free will real or just an illusion?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              In ad velit in ex nostrud dolore cupidatat consectetur
              ea in ut nostrud velit in irure cillum tempor laboris
              sed adipisicing eu esse duis nulla non.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>

    </>

  );
};

