import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ChangeControlManagementWebPartStrings';
import ChangeControlManagement from './components/ChangeControlManagement';
import { IChangeControlManagementProps } from './components/IChangeControlManagementProps';

export interface IChangeControlManagementWebPartProps {
  description: string;
}

export default class ChangeControlManagementWebPart extends BaseClientSideWebPart<IChangeControlManagementWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IChangeControlManagementProps> = React.createElement(
      ChangeControlManagement,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
