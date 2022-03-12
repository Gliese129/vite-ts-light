import axios from 'axios'

const instance = axios.create({
	baseURL: '/api',
	timeout: 20000
})

// request interceptor
instance.interceptors.request.use(
	(config: any) => {
		return config
	},
	(error: any) => {
		return Promise.reject(error)
	}
)

// response interceptor
instance.interceptors.response.use(
	(response: any) => {
		return response
	},
	(error: any) => {
		return Promise.reject(error)
	}
)

/**
 * @param {String} method get、post、delete、put
 * @param {String} url
 * @param {Object} data
 * @returns {Promise}
 */
export default function (method: string, url: string, data: any = null): Promise<any> {
	method = method.toLowerCase()
	if (method === 'post') {
		return instance.post(url, data)
	} else if (method === 'get') {
		return instance.get(url, { params: data })
	} else if (method === 'delete') {
		return instance.delete(url, { params: data })
	} else {
		return instance.put(url, data)
	}
}
