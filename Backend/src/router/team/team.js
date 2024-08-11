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

export default {
    addNewTeam,
    getAllTeams
  };