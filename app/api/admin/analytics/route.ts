import { NextResponse } from 'next/server';

const defaultVideos = [
  { _id: '1', title: 'Python機械学習入門 - 基礎から実践まで' },
  { _id: '2', title: 'ディープラーニング実践講座 - TensorFlow入門' },
  { _id: '3', title: 'デジタルマーケティング戦略設計' },
  { _id: '4', title: 'SEO対策完全ガイド - 2024年版' },
  { _id: '5', title: 'ビジネス英語プレゼンテーション術' },
  { _id: '6', title: 'TOEIC攻略法 - スコア900点を目指す' }
];

export async function GET() {
  try {
    const mockVideos = defaultVideos;

    const progressStats = mockVideos.map(video => ({
      videoId: video._id,
      videoTitle: video.title,
      totalProgress: Math.floor(Math.random() * 100) + 20,
      completedCount: Math.floor(Math.random() * 50) + 10,
      completionRate: Math.floor(Math.random() * 40) + 60
    }));

    const quizStats = mockVideos.slice(0, 4).map(video => ({
      videoId: video._id,
      videoTitle: video.title,
      totalAttempts: Math.floor(Math.random() * 80) + 20,
      avgScore: Math.floor(Math.random() * 30) + 70,
      passCount: Math.floor(Math.random() * 60) + 15,
      passRate: Math.floor(Math.random() * 40) + 60
    }));

    const userRanking = [
      { userId: '1', userName: '田中学習太郎', completedVideos: 6, completionRate: 100, lastAccess: '2024-01-15' },
      { userId: '2', userName: '佐藤勉強花子', completedVideos: 5, completionRate: 83, lastAccess: '2024-01-14' },
      { userId: '3', userName: '鈴木学習次郎', completedVideos: 4, completionRate: 67, lastAccess: '2024-01-13' },
      { userId: '4', userName: '高橋知識太郎', completedVideos: 3, completionRate: 50, lastAccess: '2024-01-12' },
      { userId: '5', userName: '伊藤学習美', completedVideos: 2, completionRate: 33, lastAccess: '2024-01-11' }
    ];

    return NextResponse.json({
      overview: {
        totalVideos: mockVideos.length,
        totalProgress: 342,
        totalQuizAttempts: 156,
        totalCompletions: 234,
        overallCompletionRate: 68
      },
      progressStats,
      quizStats,
      userRanking
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}