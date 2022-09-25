import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import Counter from "../components/Counter";

export default defineComponent({
    props: {},
    setup(props) {
        return () => (
            <>
                <RouterLink to="/new">index page</RouterLink>
                <Counter initValue={0} />
            </>
        )
    }
})