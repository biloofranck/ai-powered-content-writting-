import { UUID } from "crypto"
import {DataTypes, Model, Optional} from "sequelize"

interface TemplateAttribute{
  id?: UUID
  name?: string
  content?: string

  createdAt: Date,
  updatedAt: Date
}

export interface TemplateInput extends Optional<TemplateAttribute, "id">{}
export interface TemplateOutput extends Required<TemplateAttribute>{}

class Template extends Model<TemplateAttribute, TemplateInput> implements TemplateAttribute{
  public id!: UUID;
  public name!: string 
  public content!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}