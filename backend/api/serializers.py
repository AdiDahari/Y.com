from rest_framework import serializers
from .models import Post, Comment


class CommentSerializer(serializers.ModelSerializer):

    replies = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = "__all__"
        read_only_fields = ["id", "created_at"]

    def get_replies(self, obj):
        return CommentSerializer(obj.replies.all(), many=True, read_only=True).data


class PostSerializer(serializers.ModelSerializer):

    comments = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = "__all__"
        read_only_fields = ["id", "created_at"]

    def get_comments(self, obj):
        return CommentSerializer(
            obj.comments.filter(parent__isnull=True), many=True, read_only=True
        ).data
