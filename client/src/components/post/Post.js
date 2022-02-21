import React, { Fragment, useEffect } from 'react';
import { getPost } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const Post = () => {
  const dispatch = useDispatch();
  const { post, loading } = useSelector((state) => state.post);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  return loading || post === null ? (
    <Spinner></Spinner>
  ) : (
    <Fragment>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={id} />
      <div class='comments'>
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </Fragment>
  );
};

export default Post;
