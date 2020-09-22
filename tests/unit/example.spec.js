import { shallowMount } from "@vue/test-utils"
// import HelloWorld from "@/components/HelloWorld.vue"
import WorldMini from "@/components/worlds/WorldMini.vue"

describe("WorldMini", () => {

	//Configuracion previa

	//Test 1
	it("renders prop.nombre when passed", () => {
		const nombre = "Algo"
		const wrapper = shallowMount(WorldMini, {
			propsData: { nombre }
		})
		// console.log(wrapper.text())
		expect(wrapper.text()).toMatch(nombre)
	})

	it()

	it()


	


})
