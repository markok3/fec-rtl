"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "../apiMock/apiMock";
import { IoIosArrowBack } from "react-icons/io";
import TableActions from "./TableActions";
import { useIntl } from "react-intl";

type DataTableProps = {
  data: User[];
};

export function DataTable({ data }: DataTableProps) {
  const intl = useIntl();

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "index",
      size: 50,
      maxSize: 50,
      header: () => {
        const intl = useIntl();
        return (
          <div className="flex w-full h-full items-center justify-center border-r-2">
            {intl.formatMessage({ id: "hash" })}
          </div>
        );
      },
    },
    {
      size: 150,
      accessorKey: "name",
      header: ({ column }) => {
        const intl = useIntl();
        return (
          <div className="flex w-full h-full items-center border-r-2 px-4 text-left">
            <span className="">
              {intl.formatMessage({ id: "dataTable.name" })}
            </span>
          </div>
        );
      },
      cell: ({ row }) => (
        <div className="flex w-full h-full items-center text-left text-blue font-medium ">
          {row.getValue("name")}
        </div>
      ),
    },
    {
      accessorKey: "points",
      header: () => {
        const intl = useIntl();
        return (
          <div className="flex w-full h-full items-center  border-r-2 px-4 text-left">
            {intl.formatMessage({ id: "dataTable.points" })}
          </div>
        );
      },
      cell: ({ row }) => {
        const intl = useIntl();
        const points = parseFloat(row.getValue("points"));
        return (
          <div className="flex w-full h-full items-center text-left text-blue font-semibold">
            {points}{" "}
            <span>{intl.formatMessage({ id: "dataTable.points" })}</span>
          </div>
        );
      },
    },

    {
      accessorKey: "actions",
      header: () => <div className="text-right "></div>,
      cell: () => {
        return (
          <div className="flex justify-end  text-blue font-semibold">
            <TableActions />
          </div>
        );
      },
    },
  ];

  const recordsPerPage = 10;

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [pageIndex, setPageIndex] = React.useState(0);

  const handlePageChange = (pageIndex: number) => {
    const pageCount = table.getPageCount();
    if (pageIndex < 0 || pageIndex > pageCount - 1) return;
    setPageIndex(pageIndex);
    table.setPageIndex(pageIndex);
  };

  const onPaginationChange = () => {
    console.log(table.getState().pagination.pageIndex);
  };

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: onPaginationChange,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: {
        pageSize: recordsPerPage,
        pageIndex: pageIndex,
      },
    },
  });

  return (
    <div className="">
      <div className="rounded-md border">
        <Table className="">
          <TableHeader className="bg-[#0000000F] ">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="px-0">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, indexRow) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className=""
                >
                  {row.getVisibleCells().map((cell, index) => (
                    <TableCell
                      key={cell.id}
                      className={`max-w-[${cell.column.getSize()}px] text-center text-themeGray font-medium`}
                      style={{ maxWidth: cell.column.getSize() }}
                      width={cell.column.getSize()}
                    >
                      {/* add numbering on first column */}
                      {index === 0 ? (
                        <span className="">
                          {intl.formatMessage({ id: "hash" })}
                          {indexRow + 1}
                        </span>
                      ) : (
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {intl.formatMessage({ id: "dataTable.noResults" })}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-center gap-x-2 py-4 w-full">
        {
          <div className="flex items-center justify-center gap-x-2 py-4 w-full">
            <IoIosArrowBack
              size={28}
              className="text-themeGray cursor-pointer"
              onClick={() => handlePageChange(pageIndex - 1)}
            />
            {/* Create a button for each page */}
            {Array.from({ length: table.getPageCount() }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index)}
                className={`${
                  index === table.getState().pagination.pageIndex
                    ? "bg-blue text-white"
                    : "bg-white text-blue-500 text-themeGray"
                } px-3 py-1 rounded-md border transition-colors duration-300 ease-in-out font-bold`}
              >
                {index + 1}
              </button>
            ))}

            <IoIosArrowBack
              size={28}
              className="text-themeGray cursor-pointer rotate-180"
              onClick={() => handlePageChange(pageIndex + 1)}
            />
          </div>
        }
      </div>
    </div>
  );
}
