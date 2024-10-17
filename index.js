import { request } from 'https';
import { URL } from 'url';

export async function requestGET(url) {
  const parsed_url = new URL(url);

  const options = {
    hostname: parsed_url.hostname,
    path: parsed_url.pathname,
    method: 'GET',
  };

  return new Promise((resolve, reject) => {
    const req = request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        let objeto;
        try {
          objeto = JSON.parse(data);
        } catch (error) {
          console.error(error)
        }

        resolve({ res, objeto });
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.end();
  });
}


try {
  const response = await requestGET("https://api.trello.com/1/actions/592f11060f95a3d3d46a987a");
  console.log(`O conteúdo do campo 'name' da estrutura 'list' é: ${response?.objeto?.data?.list?.name}`);
  console.log(`O status code da resposta é: ${response?.res?.statusCode}`);
} catch (error) {
  console.error(`Erro: ${e.message}`);
  console.error(`Status Code do erro: ${e.statusCode}`);
}
