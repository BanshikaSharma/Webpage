const { createApp, ref } = Vue;

createApp({
    setup() {
        const newStory = ref({ title: '', content: '' });
        const stories = ref([]);
        const error = ref('');

        const addStory = () => {
            if (newStory.value.content.length < 3) {
                error.value = "Content must be at least 3 characters long.";
                return;
            }
            error.value = '';
            stories.value.push({ title: newStory.value.title, content: newStory.value.content });
            newStory.value.title = '';
            newStory.value.content = '';
        };

        return { newStory, stories, error, addStory };
    }
}).mount('#app');
