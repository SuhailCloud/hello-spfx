import * as React from 'react';
import styles from './ChangeControlManagement.module.scss';
import { IChangeControlManagementProps } from './IChangeControlManagementProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default class ChangeControlManagement extends React.Component<IChangeControlManagementProps, {}> {
  public render(): React.ReactElement<IChangeControlManagementProps> {
    return (
   
        <div className={styles.changeControlManagement}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.column}>
                <span className={styles.title}>Welcome to SharePoint!</span>
                <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
                <p className={styles.description}>{escape(this.props.description)}</p>
                <a href="https://aka.ms/spfx" className={styles.button}>
                  <span className={styles.label}>Learn more</span>
                </a>
              </div>
            </div>
          </div>
        </div></>
    );
  }
}
