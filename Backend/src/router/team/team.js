import db from '../../models/index.js';
import bcrypt from 'bcryptjs';

const addNewTeam = async (ctx) => {
  try {
    const { teamName, imageSrc } = ctx.request.body;
    const vulnerabilities= [
      {
        "safe": false,
        "label": "SSH vulnerable"
      },
      {
        "safe": false,
        "label": "Puertos abiertos"
      }
    ];
    const flags= [
      {
        "label": "7El3m4t1cA_2025"
      },
      {
        "label": "DIF7E1_cYbEr5Ec"
      }
    ];

    // Cifrar cada flag individualmente y agregar el booleano
    const encryptedFlags = await Promise.all(
      flags.map(async (flag) => {
        const flagString = JSON.stringify(flag); // Convertir flag a una cadena JSON
        const encryptedFlag = await bcrypt.hash(flagString, 10); // Cifrar la cadena
        return {
          label: encryptedFlag,
          encrypted: true, // Booleano indicando que está encriptada
        };
      })
    );

    const newTeam = await db.Team.create({
      teamName,
      imageSrc,
      vulnerabilities,
      flags: encryptedFlags, // Guardar las flags cifradas
    });

    ctx.body = { mensaje: '¡Equipo creado!', team: newTeam };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { mensaje: 'Error al crear el equipo', error: error.message };
  }
};

const compareFlag = async (ctx) => {
  try {
    const { flag } = ctx.request.body; // La flag enviada por el usuario
    const team = await db.Team.findOne(); // Obtener el único equipo
    console.log("ola pe",team.teamName)
    const teamName = team.teamName;
    if (!team) {
      ctx.status = 404;
      ctx.body = { mensaje: 'Equipo no encontrado' };
      return;
    }

    for (let i = 0; i < team.flags.length; i++) {
      const { label: encryptedFlag, encrypted } = team.flags[i];
      
      // Solo comparar si la flag está encriptada
      if (encrypted) {
        const isMatch = await bcrypt.compare(JSON.stringify({ label: flag }), encryptedFlag);
        if (isMatch) {
          // Desencriptar y actualizar la flag
          team.flags[i] = {
            label: flag,
            encrypted: false, // Actualizar a no encriptada
          };

          // Guardar los cambios en la base de datos
          await db.Team.update(
            { flags: team.flags },
            { where: { teamName } }
          );
          ctx.body = { mensaje: '¡Flag coincide y fue desencriptada!', flag: flag };
          return;
        }
      }
    }

    // Si ninguna flag coincide
    ctx.status = 400;
    ctx.body = { mensaje: 'Flag incorrecta. Intenta de nuevo.' };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { mensaje: 'Error al comparar la flag', error: error.message };
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
    const { teamName } = ctx.params;
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
  compareFlag,  // Exportar el nuevo endpoint
  getAllTeams,
  deleteTeam
};
