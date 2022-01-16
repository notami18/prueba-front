import {
    shallowMount,
    mount
} from '@vue/test-utils'
import CardStatePublish from '@/components/CardStatePublish.vue';

/*CA 2.3 Se debe mostrar el total de usuarios que reaccionaron con un like a la
publicación como se muestra en el diseño */

describe('pruebas para el componente de estados publicados', () => {
    test('probar que los totales de las reacciones', async() => {
        const wrapper = shallowMount(CardStatePublish, {
            data() {
                return {
                    showComment: false,
                    cardComment: "",
                    clickReact: false,
                    objComment: {
                        nameUserstate: null,
                        commentState: null,
                        date: null,
                    },
                    showAllComments: false,
                }
            },

            props: ["reaction"]
        })

        const getResult = await wrapper.vm.dataReact("😎", 0)

        expect(wrapper.text()).toBeTruthy(getResult)
    })
})