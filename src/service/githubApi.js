export const getUserInfo = async (user) => {
  const response = await fetch(`https://api.github.com/users/${user}`);
  const infos = await response.json();

  if (infos.message && (infos.message.toLowerCase() === 'not found')) {
    throw new Error('Usuário não encontrado');
  }

  return infos;
}

export const getUserApis = async (api) => {
  const resposne = await fetch(api);
  const repos = await resposne.json();

  return repos;
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