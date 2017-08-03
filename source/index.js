import fs from 'fs-then-native'

const getEntries = async () => {
	try {
		const names = await fs.readdir('./')
		const stats = names.map(name => [fs.statSync(`./${name}`), name])

		const folders = stats.filter(([stat]) => stat.isDirectory()).map(_ => _[1])
		const files = stats.filter(([stat]) => stat.isFile()).map(_ => _[1])

		console.log(files, folders)
	} catch (error) {
		console.error(error)
	}
}

getEntries()
