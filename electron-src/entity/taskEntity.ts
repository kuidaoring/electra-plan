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
  completed: boolean;
  @Column()
  description?: string;
  @Column()
  archived: boolean;
  @Column()
  createdAt?: string;

  constructor(
    id: string,
    title: string,
    dueDate: string | undefined,
    planDate: string | undefined,
    completed: boolean,
    description: string | undefined,
    archived: boolean,
    createdAt: string
  ) {
    this.id = id;
    this.title = title;
    this.dueDate = dueDate;
    this.planDate = planDate;
    this.completed = completed;
    this.description = description;
    this.archived = archived;
    this.createdAt = createdAt;
  }
}
