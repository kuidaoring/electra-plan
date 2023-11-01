import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("tasks")
export class TaskEntity {
  @PrimaryColumn()
  id: string;
  @Column()
  title: string;
  @Column({ nullable: true, type: "text" })
  dueDate: string | null;
  @Column({ nullable: true, type: "text" })
  planDate: string | null;
  @Column({ nullable: true, type: "text" })
  completedAt: string | null;
  @Column({ nullable: true, type: "text" })
  description: string | null;
  @Column({ nullable: true, type: "text" })
  archivedAt: string | null;
  @Column()
  createdAt: string;

  constructor(
    id: string,
    title: string,
    dueDate: string | null,
    planDate: string | null,
    completedAt: string | null,
    description: string | null,
    archivedAt: string | null,
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
