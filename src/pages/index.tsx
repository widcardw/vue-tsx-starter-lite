import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import HelloWorld from "../components/HelloWorld";

export default defineComponent({
    props: {},
    setup(props) {
        return () => (
            <>
                <RouterLink to="/new">index page</RouterLink>
                <HelloWorld msg="this is index page" />
            </>
        )
    }
})