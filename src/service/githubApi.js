export const getUserInfo = async (userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  const infos = await response.json();

  if (infos.message && (infos.message.toLowerCase() === 'not found')) {
    throw new Error('Usuário não encontrado');
  }

  return infos;
}

export const getUserApis = async (userName, params) => {
  const resposne = await fetch(`https://api.github.com/users/${userName}/${params}`);
  const data = await resposne.json();

  if (data.message && (data.message.toLowerCase() === 'not found')) {
    throw new Error('Problema ao se conectar com o servidor');
  }

  return data;
} 

// const Info = { 
//   login,
//   name,
//   email,
//   location,
//   company,
//   bio,
//   avatar_url,
//   followers_url,
//   following_url,
//   organizations_url,
//   starred_url,
//   public_repos,
//   public_gists,
//   followers,
//   following,
// }