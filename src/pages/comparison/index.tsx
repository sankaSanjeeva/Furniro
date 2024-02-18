import { Fragment } from 'react';
import { Overview, PreFooter, Section, Separator } from '@/common/components';
import { Header } from './components';

const data = [
  {
    group: 'General',
    fields: [
      {
        field: 'Sales Package',
        values: ['1 sectional sofa', '1 Three Seater, 2 Single Seater'],
      },
      {
        field: 'Model Number',
        values: ['TFCBLIGRBL6SRHS', 'DTUBLIGRBL568'],
      },
      {
        field: 'Secondary Material',
        values: ['TFCBLIGRBL6SRHS', 'DTUBLIGRBL568'],
      },
      {
        field: 'Configuration',
        values: ['TFCBLIGRBL6SRHS', 'DTUBLIGRBL568'],
      },
      {
        field: 'Upholstery Material',
        values: ['TFCBLIGRBL6SRHS', 'DTUBLIGRBL568'],
      },
      {
        field: 'Upholstery Color',
        values: ['TFCBLIGRBL6SRHS', 'DTUBLIGRBL568'],
      },
    ],
  },
  {
    group: 'Product',
    fields: [
      {
        field: 'Sales Package',
        values: ['1 sectional sofa', '1 Three Seater, 2 Single Seater'],
      },
      {
        field: 'Model Number',
        values: ['TFCBLIGRBL6SRHS', 'DTUBLIGRBL568'],
      },
      {
        field: 'Secondary Material',
        values: ['TFCBLIGRBL6SRHS', 'DTUBLIGRBL568'],
      },
      {
        field: 'Configuration',
        values: ['TFCBLIGRBL6SRHS', 'DTUBLIGRBL568'],
      },
      {
        field: 'Upholstery Material',
        values: ['TFCBLIGRBL6SRHS', 'DTUBLIGRBL568'],
      },
      {
        field: 'Upholstery Color',
        values: ['TFCBLIGRBL6SRHS', 'DTUBLIGRBL568'],
      },
    ],
  },
];

export default function Comparison() {
  /**
   * Access ids
   * console.log(searchParams.getAll('id'));
   */

  return (
    <div>
      <Overview name="Product Comparison" page="comparison" />

      <Section>
        <Header />
      </Section>

      <div className="max-w-screen-laptop mx-auto px-14">
        <Separator />
      </div>

      <Section className="pt-0">
        <table className="w-full table-fixed">
          <tbody>
            {data.map(({ group, fields }) => (
              <Fragment key={group}>
                <tr>
                  <td className="border-r pb-4 pt-10 pr-14 border-r-[#D9D9D9] text-2xl font-medium">
                    {group}
                  </td>
                  <td className="border-r py-4 px-14 border-r-[#D9D9D9]" />
                  <td className="border-r py-4 px-14 border-r-[#D9D9D9]" />
                </tr>
                {fields.map(({ field, values }) => (
                  <tr key={field}>
                    <td className="border-r py-4 pr-14 border-r-[#D9D9D9]">
                      {field}
                    </td>
                    <td className="border-r py-4 px-14 border-r-[#D9D9D9]">
                      {values[0]}
                    </td>
                    <td className="border-r py-4 px-14 border-r-[#D9D9D9]">
                      {values[1]}
                    </td>
                    <td className="py-4 pl-14">{values[2]}</td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </Section>

      <Section
        wrapperClass="bg-theme-light"
        className="py-24 px-10 lg:px-14 xl:px-14"
      >
        <PreFooter />
      </Section>
    </div>
  );
}
