import db from '../../models/index.js';


const addNewTeam = async (ctx) => {
  try {
    const { teamName, imageSrc, vulnerabilities, life1, life2, flags } = ctx.request.body;
    const newTeam = await db.Team.create({
      teamName,
      imageSrc,
      vulnerabilities,
      life1,
      life2,
      flags,
    });
    ctx.body = { mensaje: '¡Equipo creado!', team: newTeam };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { mensaje: 'Error al crear el equipo', error: error.message };
  }
};

// Endpoint para obtener todos los equipos
const getAllTeams = async (ctx) => {
  try {
    const teams = await db.Team.findAll();
    ctx.body = teams;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { mensaje: 'Error al obtener los equipos', error: error.message };
  }
};

const deleteTeam = async (ctx) => {
  try {
    const { Name } = ctx.params;
    const team = await db.Team.findOne({ where: { teamName: Name } });
    if (team) {
      await team.destroy();
      ctx.body = { mensaje: 'Team eliminado exitosamente' };
    } else {
      ctx.status = 404;
      ctx.body = { mensaje: 'Team no encontrado' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { mensaje: 'Error al eliminar el Team', error: error.message };
  }
};

export default {
    addNewTeam,
    getAllTeams,
    deleteTeam
  };