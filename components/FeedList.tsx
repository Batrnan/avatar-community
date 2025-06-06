import { colors } from '@/constants';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import FeedItem from './FeedItem';

const dummyData = [
  {
    id: 1,
    userId: 1,
    title: '더미 제목입니다.',
    description: '없는 내용입니다.',
    createdAt: '2025-01-01',
    author: {
      id: 1,
      nickname: '닉네임',
      imageUri: '',
    },
    imageUris: [],
    likes: [],
    hasVote: false,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },
  {
    id: 2,
    userId: 1,
    title: '더미 제목입니다.',
    description: '없는 내용입니다.',
    createdAt: '',
    author: {
      id: 1,
      nickname: '닉네임',
      imageUri: '',
    },
    imageUris: [],
    likes: [],
    hasVote: false,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },
];

function FeedList() {
  return (
    <FlatList
      data={dummyData}
      renderItem={({ item }) => <FeedItem post={item} />}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={(item) => String(item.id)}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 12,
    backgroundColor: colors.GRAY_200,
    gap: 12,
  },
});

export default FeedList;
