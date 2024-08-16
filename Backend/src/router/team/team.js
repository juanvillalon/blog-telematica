import db from '../../models/index.js';
import bcrypt from 'bcryptjs';

const addNewTeam = async (ctx) => {
  try {
    const { teamName, imageSrc } = ctx.request.body;

    // Vulnerabilidades a cifrar
    const vulnerabilities = [
      {
        "label": "SSH vulnerable"
      },
      {
        "label": "Puertos abiertos"
      }
    ];

    // Flags a cifrar
    const flags = [
      {
        "label": "7El3m4t1cA_2025"
      },
      {
        "label": "DIF7E1_cYbEr5Ec"
      }
    ];

    // Cifrar cada vulnerabilidad individualmente y agregar el booleano
    const encryptedVulnerabilities = await Promise.all(
      vulnerabilities.map(async (vuln) => {
        const vulnString = JSON.stringify(vuln); // Convertir vulnerabilidad a una cadena JSON
        const encryptedVuln = await bcrypt.hash(vulnString, 10); // Cifrar la cadena
        return {
          label: encryptedVuln,
          encrypted: true, // Booleano indicando que está encriptada
        };
      })
    );

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
      vulnerabilities: encryptedVulnerabilities, // Guardar las vulnerabilidades cifradas
      flags: encryptedFlags, // Guardar las flags cifradas
    });

    ctx.body = { mensaje: '¡Equipo creado!', team: newTeam };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { mensaje: 'Error al crear el equipo', error: error.message };
  }
};

const compareVulnerability = async (ctx) => {
  try {
    const { vulnerability } = ctx.request.body; // La vulnerabilidad enviada por el usuario
    const team = await db.Team.findOne(); // Obtener el único equipo
    const teamName = team.teamName;

    if (!team) {
      ctx.status = 404;
      ctx.body = { mensaje: 'Equipo no encontrado' };
      return;
    }

    for (let i = 0; i < team.vulnerabilities.length; i++) {
      const { label: encryptedVuln, encrypted } = team.vulnerabilities[i];
      
      // Solo comparar si la vulnerabilidad está encriptada
      if (encrypted) {
        const isMatch = await bcrypt.compare(JSON.stringify({ label: vulnerability }), encryptedVuln);
        if (isMatch) {
          // Desencriptar y actualizar la vulnerabilidad
          team.vulnerabilities[i] = {
            label: vulnerability,
            encrypted: false, // Actualizar a no encriptada
          };

          // Guardar los cambios en la base de datos
          await db.Team.update(
            { vulnerabilities: team.vulnerabilities },
            { where: { teamName } }
          );
          ctx.body = { mensaje: '¡Vulnerabilidad coincide y fue desencriptada!', vulnerability: vulnerability };
          return;
        }
      }
    }

    // Si ninguna vulnerabilidad coincide
    ctx.status = 400;
    ctx.body = { mensaje: 'Vulnerabilidad incorrecta. Intenta de nuevo.' };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { mensaje: 'Error al comparar la vulnerabilidad', error: error.message };
  }
};

const compareFlag = async (ctx) => {
  try {
    const { flag } = ctx.request.body; // La flag enviada por el usuario
    const team = await db.Team.findOne(); // Obtener el único equipo
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
  compareFlag,
  compareVulnerability, // Exportar el nuevo endpoint
  getAllTeams,
  deleteTeam
};
