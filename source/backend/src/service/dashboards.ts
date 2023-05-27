import type DB from "../../class/DB";
import type { UUID } from "node:crypto";
import { departmentById } from "./departments";
import { DashboardModel } from "@app/types/model/dashboard";

export const dashboardList = async (filter: object, db: DB) => {
  let results = await db.select<DashboardModel>({
    fields: '*',
    tables: 'flow.tasks'
  });
  
  return results;
};

export const createDashboard = async (values: DashboardModel, db: DB) => {
  const { department, name } = values;
  return await db.insert({
      fields: "department, name",
      tables: "flow.dashboard",
      values: [department, name],
      returning: "id"
  });
};

export const dashboardByDepartment = async (id: UUID, db: DB) => {
    const department = await db.selectRow({
        fields: '*',
        tables: 'flow.dashboard',
        where: 'department = $1',
        values: [id]
    });
    return {
        ...department,
        department: await departmentById(id, db)
    };
}