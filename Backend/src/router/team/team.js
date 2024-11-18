import db from '../../models/index.js';
import bcrypt from 'bcryptjs';

const addNewTeam = async (ctx) => {
  try {
    const { teamName, imageSrc } = ctx.request.body;

    // Vulnerabilidades a cifrar
    const vulnerabilities = [
      {
        "label": "Vuln3r4b1l1ty{$$H_4cc3ss-4-l34ks-cr3d}"
      },
      {
        "label": "Vuln3r4b1l1ty{0p3n.p0rts.4r3.4lw4ys.d4ng3r0us}"
      },{
        "label": "Vuln3r4b1l1ty{Leak Credentials}"
      },{
        "label": "Vuln3r4b1l1ty{H4rd3n1ng_1sV3ry.1mp0rt4nt}"
      },
      {
        "label":"Vuln3r4b1l1ty{FTP_4n0nym0u$.0n}"
      },{
        "label":"Vuln3r4b1l1ty{P3rm1ss10n.Br34ch}"
      }
    ];

    // Flags a cifrar
    const flags = [
      {
        "label": "t3l_UTFSM{th1s_1s_m4ll4.t3l_for_you}"
      },
      {
        "label": "t3l_UTFSM{Y0u_p4g3.1s_h4ck3d}"
      },{
        "label":"t3l_UTFSM{y0u_c4n_c0mm3nts.1nTh1s_p4g3}"
      },{
        "label":"t3l_utf$m{pwn3d.w3bS1t3-gj}"
      },
      {
        "label":"t3l_UTFSM{H1dd3n_d4t4.1n_ph0th0s}"
      },{
        "label":"t3l_UTFSM{0nly_y0u.f1rstFl4g0fCh4ll3ng3}"
      },{
        "label":"t3l_UTFSM{0ut_th3.80x}"
      },{
        "label":"t3l_utf$m{$upr3m4cy.p0w3r_y0ur.th3.b3st}"
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
