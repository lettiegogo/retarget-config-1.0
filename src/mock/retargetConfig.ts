// Mock 数据 - 二次触达配置

// 画布列表（前 100 个）
export interface CanvasOption {
  id: string;
  name: string;
  creator: string;
  isLoop: boolean;
  startDate: string;
  endDate: string;
  execTime: string;
  coupons: CouponOption[];
}

export interface CouponOption {
  id: string;
  name: string;
}

// 模拟画布列表数据
export const canvasList: CanvasOption[] = [
  {
    id: 'canvas-0305',
    name: '总部精准营销 -0305',
    creator: '刘雨婷',
    isLoop: true,
    startDate: '2026-04-01 10:00:00',
    endDate: '2026-04-10 23:59:59',
    execTime: '每 2 天 10:00:00',
    coupons: [
      { id: 'coupon-1', name: '满 100 减 20 优惠券' },
      { id: 'coupon-2', name: '新人专享 8 折券' },
    ],
  },
  {
    id: 'canvas-0301',
    name: '春节促销活动',
    creator: '张三',
    isLoop: false,
    startDate: '2026-01-20 00:00:00',
    endDate: '2026-01-31 23:59:59',
    execTime: '2026-01-20 00:00:00',
    coupons: [
      { id: 'coupon-3', name: '春节满减券' },
    ],
  },
  {
    id: 'canvas-0228',
    name: '会员日专属活动',
    creator: '李四',
    isLoop: true,
    startDate: '2026-02-01 00:00:00',
    endDate: '2026-12-31 23:59:59',
    execTime: '每月 28 日 09:00:00',
    coupons: [
      { id: 'coupon-4', name: '会员专享券' },
      { id: 'coupon-5', name: '积分翻倍券' },
      { id: 'coupon-6', name: '包邮券' },
    ],
  },
];

// 生成更多模拟数据（凑够 100 个）
for (let i = 4; i <= 100; i++) {
  canvasList.push({
    id: `canvas-${String(i).padStart(4, '0')}`,
    name: `营销活动-${i}`,
    creator: [`王五`, `赵六`, `钱七`, `孙八`][i % 4],
    isLoop: i % 2 === 0,
    startDate: '2026-03-01 00:00:00',
    endDate: '2026-06-30 23:59:59',
    execTime: i % 2 === 0 ? '每天 10:00:00' : '2026-03-01 10:00:00',
    coupons: [
      { id: `coupon-${i}-1`, name: `优惠券-${i}-A` },
      { id: `coupon-${i}-2`, name: `优惠券-${i}-B` },
    ],
  });
}

// 默认选中的画布 ID
export const defaultCanvasId = 'canvas-0305';
