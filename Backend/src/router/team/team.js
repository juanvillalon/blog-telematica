import db from '../../models/index.js';
import bcrypt from 'bcryptjs';


const addNewTeam = async (ctx) => {
  try {
    const { teamName, imageSrc, vulnerabilities, life1, life2, flags } = ctx.request.body;

    // Cifrar cada flag individualmente
    const encryptedFlags = await Promise.all(
      flags.map(async (flag) => {
        const flagString = JSON.stringify(flag); // Convertir flag a una cadena JSON
        const encryptedFlag = await bcrypt.hash(flagString, 10); // Cifrar la cadena
        return encryptedFlag;
      })
    );
    const newTeam = await db.Team.create({
      teamName,
      imageSrc,
      vulnerabilities,
      life1,
      life2,
      flags: encryptedFlags, // Guardar las flags cifradas
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
    const { teamName } = ctx.params; // Asegúrate de que esto coincide con la ruta
    console.log(teamName)
    const team = await db.Team.findOne({ where: { teamName } });
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