import burnGraves from 'config/constants/burnGraves'

describe('Config burnGraves', () => {
  it.each(burnGraves.map((burnGrave) => burnGrave.pid))('BurnGrave #%d has a unique identifier', (id) => {
    const burnGravesWithId = burnGraves.filter((burnGrave) => burnGrave.pid === id)
    expect(burnGravesWithId).toHaveLength(1)
  })
})
