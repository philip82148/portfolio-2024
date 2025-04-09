export class SvgCache {
  constructor(private env: Env) {}

  async get(key: string): Promise<string | null> {
    const data = await this.env.SVGS.get(key);
    if (!data) {
      return null;
    }
    const { content } = JSON.parse(data) as { content: string; updatedAt: string };
    return content;
  }

  async getUpdatedAt(key: string): Promise<Date | null> {
    const data = await this.env.SVGS.get(key);
    if (!data) {
      return null;
    }
    const { updatedAt } = JSON.parse(data) as { content: unknown; updatedAt: string };
    return new Date(updatedAt);
  }

  async update(key: string, content: string): Promise<void> {
    await this.env.SVGS.put(key, JSON.stringify({ content, updatedAt: new Date().toISOString() }));
  }
}
