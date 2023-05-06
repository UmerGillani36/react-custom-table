import React from 'react';
import classes from './CustomTable.module.css';
const CustomTable = () => {
  const data = [
    {
      title: 'ARAM Cup 7',
      caption: 'Best 1 Games',
      starts: 'Apr 15',
      duration: '24 hours',
      registered: '1.2k',
      price: '$50',
    },
    {
      title: 'ARAM Cup 7',
      caption: 'Best 1 Games',
      starts: 'Apr 15',
      duration: '24 hours',
      registered: '1.2k',
      price: '$50',
    },
    {
      title: 'ARAM Cup 7',
      caption: 'Best 1 Games',
      starts: 'Apr 15',
      duration: '24 hours',
      registered: '1.2k',
      price: '$50',
    },
    {
      title: 'ARAM Cup 7',
      caption: 'Best 1 Games',
      starts: 'Apr 15',
      duration: '24 hours',
      registered: '1.2k',
      price: '$50',
    },
    {
      title: 'ARAM Cup 7',
      caption: 'Best 1 Games',
      starts: 'Apr 15',
      duration: '24 hours',
      registered: '1.2k',
      price: '$50',
    },
    {
      title: 'ARAM Cup 7',
      caption: 'Best 1 Games',
      starts: 'Apr 15',
      duration: '24 hours',
      registered: '1.2k',
      price: '$50',
    },
  ];

  const lolIcon = (
    <svg
      width='32'
      height='32'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        class='icon-box'
        d='M0 8c0-2.8 0-4.2.545-5.27A5 5 0 0 1 2.73.545C3.8 0 5.2 0 8 0h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C20 3.8 20 5.2 20 8v4c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C16.2 20 14.8 20 12 20H8c-2.8 0-4.2 0-5.27-.545A5 5 0 0 1 .545 17.27C0 16.2 0 14.8 0 12V8Z'
        fill='#D5A038'
      ></path>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M6.223 3 7 4.167v11.277L6.223 17h8.568l1.044-3h-5.796V3H6.223ZM3.39 10.389A6.6 6.6 0 0 1 6 5.126v2.97a4.59 4.59 0 0 0-.61 2.293c0 .835.222 1.618.61 2.294v2.578l-.14.281a6.599 6.599 0 0 1-2.47-5.153Zm11.222 0c0 .97-.299 1.869-.81 2.611h2.275A6.613 6.613 0 0 0 11 3.853v2.033a4.613 4.613 0 0 1 3.611 4.503Z'
        fill='#0E1015'
      ></path>
    </svg>
  );

  return (
    <div className={classes.tableContainer}>
      <table className={classes.table}>
        <caption className={classes.captionWrapper}>Browse Events</caption>
        <thead className={classes.tHead}>
          <tr className={classes.headRow}>
            <th className={classes.head}>
              <span className={`${classes.typeCaption} ${classes.action}`}>
                Game & Event Name
              </span>
            </th>
            <th className={classes.head}>
              <span className={`${classes.typeCaption} ${classes.action}`}>
                Starts
              </span>
            </th>
            <th className={classes.head}>
              <span className={`${classes.typeCaption} ${classes.action}`}>
                Duration
              </span>
            </th>
            <th className={classes.head}>
              <span className={`${classes.typeCaption} ${classes.action}`}>
                Registered
              </span>
            </th>
            <th className={classes.head}>
              <span className={`${classes.typeCaption} ${classes.action}`}>
                Prize Pool
              </span>
            </th>
          </tr>
        </thead>
        <tbody className={classes.cardTable}>
          {data.map((row, index) => (
            <tr key={index} className={classes.bodyRow}>
              <td className={classes.headData}>
                <span className={classes.logo}>{lolIcon}</span>
                <div className={classes.titleContainer}>
                  <span className={classes.typeSubtitle1}>{row.title}</span>
                  <span className={classes.typeCaption}>{row.caption}</span>
                </div>
              </td>
              <td className={classes.start}>{row.starts}</td>
              <td className={classes.duration}>{row.duration}</td>
              <td className={classes.registered}>{row.registered}</td>
              <td className={classes.price}>{row.price}</td>
              <td className={classes.actionWrapper}>
                <a type='button' className={classes.actionDetails}>
                  <span>Details</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CustomTable;