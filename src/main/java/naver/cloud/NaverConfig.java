package naver.cloud;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:/naver.properties")
@ConfigurationProperties(prefix = "ncp")
@Data
public class NaverConfig {
    //프로퍼티 파일에서 선언된 값 중에서
    //ncp.* 이름으로 된 프로퍼티값을 받을 필드 선언
    private String accessKey; //ncp.accessKey를 받을 변수
    private String secretKey; //ncp.secretKey 받을 변수
    private String regionName; //ncp.regionName 받을 변수
    private String endPoint; //ncp.endPoint 받을 변수
}
