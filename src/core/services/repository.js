import axios from 'axios';

class Http {
	constructor() {
		this.instanceAxios = axios.create({
			baseURL: 'https://www.mocky.io/v2'
		});
	}

	getInstanceAxios () {
		return {...this.instanceAxios};
	}

	get(url, headers) {
		let configs = {};

		configs.headers = {
			...headers
		};

		return new Promise((resolve, reject) => this.instanceAxios.get(url, configs)
			.then(resolve)
			.catch(err => {
				reject("Erro - Tente novamente mais tarde");
			})
		);
	}

	post(url, data, headers) {
		let configs = {};

		configs.headers = {
			...headers
		};

		return new Promise((resolve, reject) => this.instanceAxios.post(url, data || {}, configs)
			.then(resolve)
			.catch(err => {
				reject("Erro - Tente novamente mais tarde");
			})
		);
	}

	put(url, data, headers) {
		let configs = {};

		configs.headers = {
			...headers
		};

		return new Promise((resolve, reject) => this.instanceAxios.put(url, data || {}, configs)
			.then(resolve)
			.catch(err => {
				reject("Erro - Tente novamente mais tarde");
			})
		);
	}

	delete(url, headers, data) {
		let configs = {};

		configs.headers = {
			...headers
		};

		return new Promise((resolve, reject) => this.instanceAxios.delete(url, configs, data || {})
			.then(resolve)
			.catch(err => {
				reject("Erro - Tente novamente mais tarde");
			})
		);
	}
}

export default new Http();