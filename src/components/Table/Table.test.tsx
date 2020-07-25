import React from 'react';
import { render } from '@testing-library/react';

import Table from './Table';

interface Course {
  name: string;
  length: string;
  status: 'done' | 'in progress' | 'not started';
}

describe('Table', () => {
  const courses: Course[] = [
    { name: 'Course 1', length: '2h', status: 'done' },
    { name: 'Course 2', length: '4h', status: 'in progress' },
    { name: 'Course 3', length: '1h', status: 'in progress' },
    { name: 'Course 4', length: '3h 43m', status: 'not started' },
    { name: 'Course 5', length: '1h', status: 'in progress' },
    { name: 'Course 6', length: '2h 15m', status: 'not started' },
    { name: 'Course 7', length: '3h', status: 'done' },
  ];

  test('default snapshot', () => {
    const component = (
      <Table>
        <Table.Header>
          <Table.HeaderCell>Course</Table.HeaderCell>
          <Table.HeaderCell>Length</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          {courses.map((course) => {
            return (
              <Table.Row>
                <Table.Cell>{course.name}</Table.Cell>
                <Table.Cell>{course.length}</Table.Cell>
                <Table.Cell>{course.status}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });
});
