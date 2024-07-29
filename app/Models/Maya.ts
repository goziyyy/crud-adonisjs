import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Maya extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @column()
  public nama: string;

  @column()
  public nis: string;

  @column()
  public alamat: string;
  
  @column()
  public jabatan: string;

  @column()
  public dihapus: number;

}
