import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import useStyles from './styles.js'
import { deletePost, likePost } from '../../../api/index.js'


const Post = ({ post, setCurrentId }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Card className={classes.card}> 
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.creator).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ collor: 'white' }} size='small' onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="small" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component='p'>{post.message}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={async() => dispatch(await likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={async() => dispatch(await deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>

        </Card>
    )
}

export default Post