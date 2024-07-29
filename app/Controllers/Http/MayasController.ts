import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Maya from 'App/Models/Maya';

export default class MayasController {
  public async index({ view }: HttpContextContract) {
    const mayas = await Maya.all();

    return view.render('mayas.index', { mayas: mayas.map((maya) => maya.toJSON()) });
  }

  public async create({ view }: HttpContextContract) {
    return view.render('mayas.create');
  }

  public async store({ request, response }: HttpContextContract) {
    const {nama, nis, alamat, jabatan } = request.all();
    await Maya.create({
      nama,
      nis,
      alamat,
      jabatan,
      dihapus: 0,
    });
    return response.redirect("/mayas");
  }

  public async show({ view, params }: HttpContextContract) {
    const id = params.id;
    const maya = await Maya.query()
      .where({ dihapus: 0 })
      .andWhere({ id })
      .firstOrFail();

      return view.render("mayas.show", { maya });
  }

  public async edit({ params, view }: HttpContextContract) {
    const maya = await Maya.find(params.id)
    return view.render('mayas.edit', { maya: maya?.toJSON() })
  }

  public async update({
    request,
    response,
    params,
    session,
  }: HttpContextContract) {
    const { nama, nis, alamat, jabatan } = request.all();
    const id = params.id;

    await Maya.query().where({ id }).update({
      nama,
      nis,
      alamat,
      jabatan,
      dihapus: 0,
    });
    session.flash({ notifivation: "Data Berhasil Diupdate!" });

    return response.redirect(`/mayas/${id}`);
  }

  public async destroy({}: HttpContextContract) {
    // Implementation for deleting data goes here
  }
}
