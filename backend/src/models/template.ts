import { UUID } from "crypto"
import { DataTypes, Model, Optional } from "sequelize"
import connection from "../config/dbConnect"

interface TemplateAttribute {
  id?: UUID
  name?: string
  content?: string
}

export interface TemplateInput extends Optional<TemplateAttribute, "id"> { }
export interface TemplateOutput extends Required<TemplateAttribute> { }

class Template extends Model<TemplateAttribute, TemplateInput> implements TemplateAttribute {
  public id!: UUID;
  public name!: string
  public content!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Template.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
  },
  {
    sequelize: connection,
    underscored: false,
    tableName: "template",
    timestamps: true
  }
)

export default Template;