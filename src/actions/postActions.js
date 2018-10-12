// a function that returns an action...action creator

export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id: id
    }
}