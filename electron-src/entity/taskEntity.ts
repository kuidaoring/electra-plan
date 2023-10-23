import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("tasks")
export class TaskEntity {
  @PrimaryColumn()
  id: string;
  @Column()
  title: string;
  @Column()
  dueDate?: string;
  @Column()
  planDate?: string;
  @Column()
  completedAt?: string;
  @Column()
  description?: string;
  @Column()
  archivedAt?: string;
  @Column()
  createdAt?: string;

  constructor(
    id: string,
    title: string,
    dueDate: string | undefined,
    planDate: string | undefined,
    completedAt: string | undefined,
    description: string | undefined,
    archivedAt: string | undefined,
    createdAt: string
  ) {
    this.id = id;
    this.title = title;
    this.dueDate = dueDate;
    this.planDate = planDate;
    this.completedAt = completedAt;
    this.description = description;
    this.archivedAt = archivedAt;
    this.createdAt = createdAt;
  }
}
