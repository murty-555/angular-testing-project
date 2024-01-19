import { LoggerService } from "./logger.service"

describe('Logger service', () => {

  let service: LoggerService;

  beforeEach(() => {
    service = new LoggerService();
  })

  it('should not contain any messages initially', () => {
    //arrange
    
    //act
    let count = service.messages.length;

    //assert
    expect(count).toBe(0);
  })

  it('should contain one message when log method called one time', () => {
    //arrange
    
    //act
    service.log('first message')
    let count = service.messages.length

    //assert
    expect(count).toBe(1);
  })

  it('should empty messages array when clear method called', () => {
    //arrange
        service.log('added message')

    //act
    service.clear();

    //assert
    expect(service.messages.length).toBe(0);
  })
})