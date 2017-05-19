/**
 * Created by valdemarrolfsen on 24.01.2017.
 */
class Api {
  static headers() {
    return {
      'Accept':'application/json',
      'Content-Type':'application/json',
      'dataType':'json',
      'X-RequestedWith':'XMLHttpRequest'
    }
  }

  static get(route, host = null) {
    return this.xhr(route, null, 'GET', host)
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb, host) {

    if (host == null)
      host = 'https://addb.absolutdrinks.com';

    const url = `${host}${route}`;

    let options = Object.assign({method:verb}, params ? {body: JSON.stringify(params)} : null);
    options.headers = Api.headers();

    console.log(url);

    return fetch(url, options)
      .then( resp => resp.json())
      .then( resp => {
        console.log(resp);
        return resp;
    }).catch(err => {throw err});
  }
}

export default Api