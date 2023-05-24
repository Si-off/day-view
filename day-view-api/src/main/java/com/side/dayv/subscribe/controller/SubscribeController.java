package com.side.dayv.subscribe.controller;

import com.side.dayv.global.response.ApiResponse;
import com.side.dayv.subscribe.dto.request.SubscribeRequestDto;
import com.side.dayv.subscribe.service.SubscribeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/subscribes")
@RequiredArgsConstructor
public class SubscribeController {

    private final SubscribeService subscribeService;

    @PostMapping
    public ApiResponse subscribe(@RequestBody SubscribeRequestDto subscribeRequestDto) {
        subscribeService.subscribe(subscribeRequestDto);
        return ApiResponse.success();
    }

    @DeleteMapping
    public ApiResponse unsubscribe(@RequestBody SubscribeRequestDto subscribeRequestDto) {
        subscribeService.unsubscribe(subscribeRequestDto);
        return ApiResponse.success();
    }
}
