import { z } from "zod/v4";
import { Zod } from "../helpers/zod";

export type RouteHomeProps = {};

export const RouteHome = (props: RouteHomeProps) => {
  return (
    <div className="p-4" {...props}>
      Home
    </div>
  );
};

export type ItemType = z.infer<typeof ItemType>;
export const ItemType = z.strictObject({
  type: z.literal("item"),
  number: z.string(),
  name: z.string(),
  effort: z.number(),
});

export type ProjectType = z.infer<typeof ProjectType>;
export const ProjectType = z.strictObject({
  type: z.literal("project"),
  id: z.string(),
  title: z.string(),
  status: z.enum(["active", "completed", "paused"]),
});

export type CellsType = z.infer<typeof CellsType>;
export const CellsType = z.strictObject({
  type: z.literal("cells"),
  data: z.string().array(),
});

export type RowType = z.infer<typeof RowType>;
export const RowType = z.strictObject({
  type: z.literal("row"),
  item: ItemType.optional(),
  cells: CellsType.optional(),
});

const rows = [
  Zod.parseObject(RowType, {
    type: "row",
    item: { type: "item", number: "12.01", name: "Mustermann, Martin", effort: 80 },
  }),
  Zod.parseObject(RowType, {
    type: "row",
    item: { type: "item", number: "1.1", name: "Konstruktion M", effort: 80 },
  }),
  Zod.parseObject(RowType, {
    type: "row",
    item: { type: "item", number: "20.01", name: "Fleissig, Bodo", effort: 128 },
    cells: {
      type: "cells",
      data: [
        "2014-11-17,8",
        "2014-11-18,8",
        "2024-11-20,8",
        "2024-11-21,8",
        "2024-11-24,8",
        "2024-11-25,8",
        "2024-11-26,8",
        "2024-11-27,8",
        "2024-11-28,8",
        "2024-12-01,13",
        "2024-12-02,8",
        "2024-12-03,8",
        "2024-12-04,8",
        "2024-12-05,8",
        "2024-12-08,8",
        "2024-12-09,3",
      ],
    },
  }),
  Zod.parseObject(RowType, {
    type: "row",
    item: { type: "item", number: "1.9", name: "Untersuchung", effort: 48 },
    cells: {
      type: "cells",
      data: [
        "2024-12-01,5",
        "2024-12-02,8",
        "2024-12-03,8",
        "2024-12-04,8",
        "2024-12-05,8",
        "2024-12-08,8",
        "2024-12-09,3",
      ],
    },
  }),
  Zod.parseObject(RowType, {
    type: "row",
    item: { type: "item", number: "2.1", name: "Konstruktion M", effort: 80 },
    cells: {
      type: "cells",
      data: [
        "2014-11-17,8",
        "2014-11-18,8",
        "2024-11-20,8",
        "2024-11-21,8",
        "2024-11-24,8",
        "2024-11-25,8",
        "2024-11-26,8",
        "2024-11-27,8",
        "2024-11-28,8",
        "2024-12-01,8",
      ],
    },
  }),
  Zod.parseObject(RowType, {
    type: "row",
    item: { type: "item", number: "21.01", name: "Schwarz, Udo", effort: 80 },
  }),
  Zod.parseObject(RowType, {
    type: "row",
    item: { type: "item", number: "1.4", name: "Konstruktion SW", effort: 40 },
  }),
  Zod.parseObject(RowType, {
    type: "row",
    item: { type: "item", number: "2.14", name: "IB Software", effort: 40 },
  }),
  // ["21.01", "Schwarz, Udo", "80"],
  // ["1.4", "Konstruktion SW", "40"],
  // ["2.14", "IB Software", "40"],
  // ["22.01", "Weiss, Andreas", "40"],
  // ["1.2", "Konstruktion E", "40"],
  // ["1.9", "Untersuchung", "48"],
  // ["2.2", "Konstruktion E", "40"],
  // ["2.9", "Fertigung, IB E", "52"],
  // ["23.01", "Schwarzmann, Niko", "61"],
  // ["25.01", "Ordentlich, Thomas", "48"],
  // ["1.9", "Untersuchung", "48"],
  // ["26.01", "Zuverlaessig, David", "16"],
];
