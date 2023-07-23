import { DataGrid, Heading, View } from "@go1d/go1d";
import Layout from "~/components/layout";

export default function ReportPage() {
  return (
    <Layout paddingY={6}>
      <Heading semanticElement="h2" visualHeadingLevel="Heading 2">
        Report
      </Heading>

      <View height="80vh" width="100%">
        <DataGrid
          columns={[
            { accessorKey: "id", header: "ID", size: 70 },
            { accessorKey: "firstName", header: "First name", size: 130 },
            { accessorKey: "lastName", header: "Last name", size: 130 },
            {
              accessorKey: "age",
              header: "Age",
              size: 90,
            },
            {
              accessorKey: "fullName",
              header: "Full name",
              size: 160,
              cell: (params) =>
                `${params.row.getValue("firstName") || ""} ${
                  params.row.getValue("lastName") || ""
                }`,
            },
          ]}
          fetchSize={50}
          fetchData={() => {
            return Promise.resolve({
              meta: {
                total: 9,
                totalRowCount: 9,
              },
              data: [
                { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
                { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
                { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
                { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
                {
                  id: 5,
                  lastName: "Targaryen",
                  firstName: "Daenerys",
                  age: null,
                },
                { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
                { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
                { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
                { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
              ],
            });
          }}
        />
      </View>
    </Layout>
  );
}
