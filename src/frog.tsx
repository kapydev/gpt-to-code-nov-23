import React from "react";

// Placeholder for the image
const placeholderImage = "https://via.placeholder.com/150";

const UserProfile = () => {
  return (
    <div className="bg-yellow-400 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center space-x-6 mb-4">
          <img
            className="h-16 w-16 rounded-full"
            src={placeholderImage}
            alt="Frog profile"
          />
          <div>
            <div className="font-bold text-lg">祝你今天抽到好牌</div>
            <div className="text-sm text-gray-600">186******7584</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-center">
            <div className="text-lg font-bold">1205</div>
            <div className="text-sm text-gray-600">金币</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">5</div>
            <div className="text-sm text-gray-600">优惠券</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">268</div>
            <div className="text-sm text-gray-600">足迹</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">78</div>
            <div className="text-sm text-gray-600">关注</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">136</div>
            <div className="text-sm text-gray-600">收藏</div>
          </div>
        </div>
        <div className="border-t-2 border-gray-200 mt-6 pt-6">
          <ul>
            <li className="text-sm text-gray-600 mb-4">我的资产</li>
            <li className="text-sm text-gray-600 mb-4">在线客服</li>
            <li className="text-sm text-gray-600 mb-4">常见中心</li>
            <li className="text-sm text-gray-600 mb-4">我的任务</li>
            <li className="text-sm text-gray-600 mb-4">邀请有奖</li>
            <li className="text-sm text-gray-600 mb-4">关于</li>
            <li className="text-sm text-gray-600 mb-4">设置</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
